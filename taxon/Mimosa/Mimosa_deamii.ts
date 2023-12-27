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


// Description of Mimosa deamii
const Mimosa_deamii = new Mimosa()
Mimosa_deamii.specificEpithet = 'deamii'

Mimosa_deamii.stems = new Stems()

Mimosa_deamii.stipule = new Stipule()
Mimosa_deamii.stipule.margin = new MarginStipule()
Mimosa_deamii.stipule.adaxial = new AdaxialStipule()
Mimosa_deamii.stipule.abaxial = new AbaxialStipule()

Mimosa_deamii.leaf = new Leaf()
Mimosa_deamii.leaf.petiole = new Petiole()
Mimosa_deamii.leaf.bipinnate = new Bipinnate()
Mimosa_deamii.leaf.bipinnate.rachis = new Rachis()
Mimosa_deamii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_deamii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_deamii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_deamii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 11)
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(12)
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_deamii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_deamii.inflorescence = new Inflorescence()
Mimosa_deamii.inflorescence.peduncle = new Peduncle()
Mimosa_deamii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_deamii.flower = new Flower()
Mimosa_deamii.flower.bracteole = new Bracteole()
Mimosa_deamii.flower.calyx = new Calyx()
Mimosa_deamii.flower.corolla = new Corolla()

Mimosa_deamii.androecium = new Androecium()
Mimosa_deamii.androecium.filaments = new Filaments()

Mimosa_deamii.ginoecium = new Ginoecium()
Mimosa_deamii.ginoecium.ovary = new Ovary()

Mimosa_deamii.fruit = new Fruit()
Mimosa_deamii.fruit.stipe = new Stipe()
Mimosa_deamii.fruit.replum = new Replum()
Mimosa_deamii.fruit.epicarp = new Epicarp()

Mimosa_deamii.seed = new Seed()


// Description authorship
Mimosa_deamii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_deamii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa deamii
export { Mimosa_deamii }