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


// Description of Mimosa annularis
const Mimosa_annularis = new Mimosa()
Mimosa_annularis.specificEpithet = 'annularis'

Mimosa_annularis.stems = new Stems()

Mimosa_annularis.stipule = new Stipule()
Mimosa_annularis.stipule.margin = new MarginStipule()
Mimosa_annularis.stipule.adaxial = new AdaxialStipule()
Mimosa_annularis.stipule.abaxial = new AbaxialStipule()

Mimosa_annularis.leaf = new Leaf()
Mimosa_annularis.leaf.petiole = new Petiole()
Mimosa_annularis.leaf.bipinnate = new Bipinnate()
Mimosa_annularis.leaf.bipinnate.rachis = new Rachis()
Mimosa_annularis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_annularis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_annularis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 7)
Mimosa_annularis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_annularis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_annularis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_annularis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 10)
Mimosa_annularis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_annularis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_annularis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_annularis.inflorescence = new Inflorescence()
Mimosa_annularis.inflorescence.peduncle = new Peduncle()
Mimosa_annularis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_annularis.flower = new Flower()
Mimosa_annularis.flower.bracteole = new Bracteole()
Mimosa_annularis.flower.merism = ['4-merous', '5-merous']
Mimosa_annularis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_annularis.flower.calyx = new Calyx()
Mimosa_annularis.flower.calyx.shape = 'campanulate'
Mimosa_annularis.flower.corolla = new Corolla()
Mimosa_annularis.flower.corolla.shape = 'turbinate'

Mimosa_annularis.androecium = new Androecium()
Mimosa_annularis.androecium.filaments = new Filaments()
Mimosa_annularis.androecium.filaments.colour = 'whitenish'

Mimosa_annularis.ginoecium = new Ginoecium()
Mimosa_annularis.ginoecium.ovary = new Ovary()

Mimosa_annularis.fruit = new Fruit()
Mimosa_annularis.fruit.stipe = new Stipe()
Mimosa_annularis.fruit.replum = new Replum()
Mimosa_annularis.fruit.epicarp = new Epicarp()

Mimosa_annularis.seed = new Seed()


// Description authorship
Mimosa_annularis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_annularis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa annularis
export { Mimosa_annularis }