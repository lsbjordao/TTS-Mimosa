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


// Description of Mimosa lasiocephala
const Mimosa_lasiocephala = new Mimosa()
Mimosa_lasiocephala.specificEpithet = 'lasiocephala'

Mimosa_lasiocephala.stems = new Stems()

Mimosa_lasiocephala.stipule = new Stipule()
Mimosa_lasiocephala.stipule.margin = new MarginStipule()
Mimosa_lasiocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_lasiocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_lasiocephala.leaf = new Leaf()
Mimosa_lasiocephala.leaf.petiole = new Petiole()
Mimosa_lasiocephala.leaf.bipinnate = new Bipinnate()
Mimosa_lasiocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_lasiocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lasiocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 23)
Mimosa_lasiocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lasiocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lasiocephala.inflorescence = new Inflorescence()
Mimosa_lasiocephala.inflorescence.peduncle = new Peduncle()
Mimosa_lasiocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lasiocephala.flower = new Flower()
Mimosa_lasiocephala.flower.bracteole = new Bracteole()
Mimosa_lasiocephala.flower.calyx = new Calyx()
Mimosa_lasiocephala.flower.corolla = new Corolla()

Mimosa_lasiocephala.androecium = new Androecium()
Mimosa_lasiocephala.androecium.filaments = new Filaments()

Mimosa_lasiocephala.ginoecium = new Ginoecium()
Mimosa_lasiocephala.ginoecium.ovary = new Ovary()

Mimosa_lasiocephala.fruit = new Fruit()
Mimosa_lasiocephala.fruit.stipe = new Stipe()
Mimosa_lasiocephala.fruit.replum = new Replum()
Mimosa_lasiocephala.fruit.epicarp = new Epicarp()

Mimosa_lasiocephala.seed = new Seed()


// Description authorship
Mimosa_lasiocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lasiocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa lasiocephala
export { Mimosa_lasiocephala }