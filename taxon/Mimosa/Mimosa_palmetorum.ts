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


// Description of Mimosa palmetorum
const Mimosa_palmetorum = new Mimosa()
Mimosa_palmetorum.specificEpithet = 'palmetorum'

Mimosa_palmetorum.stems = new Stems()

Mimosa_palmetorum.stipule = new Stipule()
Mimosa_palmetorum.stipule.margin = new MarginStipule()
Mimosa_palmetorum.stipule.adaxial = new AdaxialStipule()
Mimosa_palmetorum.stipule.abaxial = new AbaxialStipule()

Mimosa_palmetorum.leaf = new Leaf()
Mimosa_palmetorum.leaf.petiole = new Petiole()
Mimosa_palmetorum.leaf.bipinnate = new Bipinnate()
Mimosa_palmetorum.leaf.bipinnate.rachis = new Rachis()
Mimosa_palmetorum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_palmetorum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_palmetorum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_palmetorum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 18)
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(22)
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_palmetorum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_palmetorum.inflorescence = new Inflorescence()
Mimosa_palmetorum.inflorescence.peduncle = new Peduncle()
Mimosa_palmetorum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_palmetorum.flower = new Flower()
Mimosa_palmetorum.flower.bracteole = new Bracteole()
Mimosa_palmetorum.flower.merism = '3-merous'
Mimosa_palmetorum.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_palmetorum.flower.calyx = new Calyx()
Mimosa_palmetorum.flower.corolla = new Corolla()
Mimosa_palmetorum.flower.corolla.shape = 'turbinate'

Mimosa_palmetorum.androecium = new Androecium()
Mimosa_palmetorum.androecium.filaments = new Filaments()
Mimosa_palmetorum.androecium.filaments.colour = 'pinkish'

Mimosa_palmetorum.ginoecium = new Ginoecium()
Mimosa_palmetorum.ginoecium.ovary = new Ovary()

Mimosa_palmetorum.fruit = new Fruit()
Mimosa_palmetorum.fruit.stipe = new Stipe()
Mimosa_palmetorum.fruit.replum = new Replum()
Mimosa_palmetorum.fruit.epicarp = new Epicarp()

Mimosa_palmetorum.seed = new Seed()


// Description authorship
Mimosa_palmetorum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_palmetorum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa palmetorum
export { Mimosa_palmetorum }