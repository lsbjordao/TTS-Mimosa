// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa medioxima
const Mimosa_medioxima = new Mimosa()
Mimosa_medioxima.specificEpithet = 'medioxima'

Mimosa_medioxima.stems = new Stems()

Mimosa_medioxima.stipule = new Stipule()
Mimosa_medioxima.stipule.margin = new MarginStipule()
Mimosa_medioxima.stipule.adaxial = new AdaxialStipule()
Mimosa_medioxima.stipule.abaxial = new AbaxialStipule()

Mimosa_medioxima.leaf = new Leaf()
Mimosa_medioxima.leaf.petiole = new Petiole()
Mimosa_medioxima.leaf.bipinnate = new Bipinnate()
Mimosa_medioxima.leaf.bipinnate.rachis = new Rachis()
Mimosa_medioxima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_medioxima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_medioxima.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 2)
Mimosa_medioxima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_medioxima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_medioxima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_medioxima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 45)
Mimosa_medioxima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_medioxima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_medioxima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_medioxima.inflorescence = new Inflorescence()
Mimosa_medioxima.inflorescence.peduncle = new Peduncle()
Mimosa_medioxima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_medioxima.flower = new Flower()
Mimosa_medioxima.flower.bracteole = new Bracteole()
Mimosa_medioxima.flower.calyx = new Calyx()
Mimosa_medioxima.flower.corolla = new Corolla()

Mimosa_medioxima.androecium = new Androecium()
Mimosa_medioxima.androecium.filaments = new Filaments()

Mimosa_medioxima.ginoecium = new Ginoecium()
Mimosa_medioxima.ginoecium.ovary = new Ovary()

Mimosa_medioxima.fruit = new Fruit()
Mimosa_medioxima.fruit.stipe = new Stipe()
Mimosa_medioxima.fruit.replum = new Replum()
Mimosa_medioxima.fruit.epicarp = new Epicarp()

Mimosa_medioxima.seed = new Seed()


// Description authorship
Mimosa_medioxima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_medioxima.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa medioxima
export { Mimosa_medioxima }